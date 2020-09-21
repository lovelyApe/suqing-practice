<template>
  <div class="project-list">
    <h2 style="text-align: left">业务列表</h2>
    <section class="query-wrap">
      <div class="mode">
        <span class="mode-title">显示模式：</span>
        <div class="mode-change" @click="toggleTableMode">
          <div :class="['card-wrap', isTable ? 'card-wrap-active' : '']">
            <i class="el-icon-film"></i>
          </div>
          <div :class="['card-wrap', !isTable ? 'card-wrap-active' : '']">
            <i class="el-icon-menu"></i>
          </div>
        </div>
      </div>
      <el-input placeholder="名称，关键字" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </section>
    <template v-if="isTable">
      <el-table border :data="tableData" stripe style="width: 100%">
        <el-table-column label="名称">
          <template slot-scope="scope">
            <el-link :href="`/#/projectDetail?id=${scope.row.id}&type=show`">
              {{ scope.row.name }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="creator" label="创建人"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="table-btn">查看</div>
            <div class="table-btn" @click="handleDelete(scope.row.id)">
              删除
            </div>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <template v-if="!isTable">
      <el-row>
        <el-col
          :span="5"
          v-for="(o, index) in tableData"
          :key="o.id"
          :offset="index % 4 > 0 ? 1 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="o.image" class="image" />
            <div style="padding: 14px;cursor: pointer">
              <span>{{ o.name }}</span>
              <div class="bottom">
                <time class="time">
                  {{ o.creator }} 创建于 {{ o.createTime }}
                </time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </template>
    <el-pagination
      background
      class="pagination"
      layout="prev, pager, next"
      :page-count="currentPage"
      :total="tableData.length"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ProjectList',
})
export default class ProjectList extends Vue {
  private isTable = true;

  private currentPage = 1;

  private tableData = [
    {
      name: '折线图',
      type: 'line',
      creator: '啪叽',
      createTime: '2020-09-18',
      id: '1',
      image:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/line-stack.jpg?_v_=20200710_1',
    },
    {
      name: '柱状图',
      type: 'bar',
      creator: '啪叽',
      createTime: '2020-09-18',
      id: '2',
      image:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/bar-brush.jpg?_v_=20200710_1',
    },
  ];

  private toggleTableMode() {
    this.isTable = !this.isTable;
  }

  private handleDelete(id: string) {
    console.log(this, id);
  }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
