<template>
  <div class="project-detail">
    <h2>图表详情</h2>
    <div class="info-wrap" ref="infoWrap">
      <div class="left-wrap">
        <MonacoEditor
          class="editor"
          :height="wrapHeight"
          width="500"
          language="javascript"
          :value="codeStr"
          :options="options"
          @change="handleSaveCode"
        ></MonacoEditor>
        <el-button type="primary" @click="handleRunCode">运行</el-button>
      </div>
      <div class="right-wrap">
        <div id="charts" :style="`height: ${wrapHeight}px; width:100%`"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MonacoEditor from 'monaco-editor-vue';
import echarts from 'echarts';

@Component({
  name: 'ProjectDetail',
  components: {
    MonacoEditor,
  },
})
export default class ProjectDetail extends Vue {
  private codeStr = '';

  private wrapHeight = 500;

  private options = {
    theme: 'vs',
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    automaticLayout: true,
    glyphMargin: true,
    showFoldingControls: 'always',
    formatOnPaste: true,
    formatOnType: true,
    folding: true,
  };

  private myChart;

  private handleSaveCode(data) {
    this.codeStr = data;
  }

  private handleRunCode() {
    const str = this.codeStr.split('=')[1];
    const obj = eval('(' + str + ')');
    this.myChart.setOption(obj);
  }

  private mounted() {
    this.codeStr = `option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {},
    yAxis: {},
    series: [{
        name: '销量',
        type: 'pie',
        data: [
            { name: '衬衫', value: '5' },
            { name: '羊毛衫', value: '20' },
            { name: '雪纺衫', value: '36' },
            { name: '裤子', value: '13' },
            { name: '高跟鞋', value: '5' },
            { name: '袜子', value: '21' },
        ]
    }]
}`;
    this.wrapHeight = (this.$refs.infoWrap as HTMLElement).clientHeight - 24;
    this.myChart = echarts.init(document.getElementById('charts'), '', {
      height: this.wrapHeight + 'px',
      renderer: 'canvas',
    });
    const str = this.codeStr.split('=')[1];
    const obj = eval('(' + str + ')');
    this.myChart.setOption(obj);
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
