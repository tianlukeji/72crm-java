(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-02fe"],{"0jgK":function(e,t,a){"use strict";var n=a("1+/9");a.n(n).a},"1+/9":function(e,t,a){},PjHV:function(e,t,a){},ZQxE:function(e,t,a){"use strict";var n=a("PjHV");a.n(n).a},beNh:function(e,t,a){"use strict";a.r(t);var n=a("mqlf"),i=a("kegP"),l={name:"clueIndex",components:{ClueDetail:n.a},mixins:[i.a],data:function(){return{crmType:"leads"}},computed:{},mounted:function(){},methods:{cellStyle:function(e){e.row;var t=e.column;e.rowIndex,e.columnIndex;return"leadsName"===t.property?{color:"#3E84E9",cursor:"pointer"}:""}}},s=(a("0jgK"),a("ZrdR")),o=Object(s.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("c-r-m-list-head",{attrs:{title:"线索管理",placeholder:"请输入线索名称/手机/电话","main-title":"新建线索","crm-type":e.crmType},on:{"on-handle":e.listHeadHandle,"on-search":e.crmSearch,"on-export":e.exportInfos}}),e._v(" "),n("div",{directives:[{name:"empty",rawName:"v-empty",value:!e.crm.leads.index,expression:"!crm.leads.index"}],staticClass:"crm-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"}},[n("c-r-m-table-head",{ref:"crmTableHead",attrs:{"crm-type":e.crmType},on:{filter:e.handleFilter,handle:e.handleHandle,scene:e.handleScene}}),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"n-table--border",staticStyle:{width:"100%"},attrs:{id:"crm-table",data:e.list,height:e.tableHeight,stripe:"",border:"","highlight-current-row":"","cell-style":e.cellStyle},on:{"row-click":e.handleRowClick,"header-dragend":e.handleHeaderDragend,"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection",align:"center",width:"55"}}),e._v(" "),e._l(e.fieldList,function(t,a){return n("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"",fixed:0==a,prop:t.prop,label:t.label,width:t.width,formatter:e.fieldFormatter},scopedSlots:e._u([{key:"header",fn:function(t){return[n("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),n("el-table-column"),e._v(" "),n("el-table-column",{attrs:{fixed:"right",width:"36"},scopedSlots:e._u([{key:"header",fn:function(t){return[n("img",{staticClass:"table-set",attrs:{src:a("zbTZ")},on:{click:e.handleTableSet}})]}}])})],2),e._v(" "),n("div",{staticClass:"p-contianer"},[n("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:pageSize":function(t){e.pageSize=t}}})],1)],1),e._v(" "),e.showDview?n("clue-detail",{staticClass:"d-view",attrs:{id:e.rowID},on:{handle:e.handleHandle,"hide-view":function(t){e.showDview=!1}}}):e._e(),e._v(" "),n("fields-set",{attrs:{crmType:e.crmType,dialogVisible:e.showFieldSet},on:{"set-success":e.setSave,"update:dialogVisible":function(t){e.showFieldSet=t}}})],1)},[],!1,null,"4031fe1a",null);o.options.__file="ClueIndex.vue";t.default=o.exports},jRCO:function(e,t,a){"use strict";var n=a("pJnx");a.n(n).a},mqlf:function(e,t,a){"use strict";var n=a("5tgW"),i=a("Ew9n"),l=a("F03V"),s=a("UEWd"),o=a("QJC7"),r=(a("7Qib"),{name:"clue-follow",components:{MixAdd:s.a,RecordLog:o.a},props:{id:[String,Number],crmType:{type:String,default:""}},watch:{},data:function(){return{sendLoading:!1,followTypes:[{type:"打电话",name:"打电话"},{type:"发邮件",name:"发邮件"},{type:"发短信",name:"发短信"},{type:"见面拜访",name:"见面拜访"},{type:"活动",name:"活动"}],followType:"打电话",nextTime:"",isEvent:!1,logType:"record",logTypes:[]}},computed:{componentsName:function(){return"record"==this.logType?"RecordLog":""}},mounted:function(){},activated:function(){},deactivated:function(){},methods:{handleTypeDrop:function(e){this.followType=e},logTabsClick:function(e,t){this.logType=e.type},sendInfo:function(){this.$refs.mixadd.$emit("submit-info")},submitInfo:function(e){var t=this;if(!this.isEvent||this.nextTime)if(e.content){var a={};a.typesId=this.id,a.content=e.content,a.category=this.followType,a.batchId=e.batchId,a.isEvent=this.isEvent?1:0,a.nextTime=this.nextTime||"",this.sendLoading=!0,Object(n.h)(a).then(function(e){t.sendLoading=!1,t.$message.success("发布成功"),t.$refs.mixadd.resetInfo(),t.isEvent=!1,t.nextTime="",t.$bus.emit("follow-log-refresh",{type:"record-log"})}).catch(function(){t.sendLoading=!1})}else this.$message.error("请输入跟进内容");else this.$message.error("请选择下次联系时间")}}}),c=(a("jRCO"),a("ZrdR")),d=Object(c.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"f-container"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.sendLoading,expression:"sendLoading"}]},[a("mix-add",{ref:"mixadd",attrs:{crmType:e.crmType,id:e.id},on:{"mixadd-info":e.submitInfo}}),e._v(" "),a("flexbox",{staticClass:"se-section"},[a("div",{staticClass:"se-name"},[e._v("记录类型")]),e._v(" "),a("el-dropdown",{staticStyle:{"margin-right":"20px"},attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[a("flexbox",{staticClass:"se-select"},[a("div",{staticClass:"se-select-name"},[e._v(e._s(e.followType?e.followType:"请选择"))]),e._v(" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right",staticStyle:{color:"#ccc"}})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.followTypes,function(t,n){return a("el-dropdown-item",{key:n,attrs:{command:t.type}},[e._v(e._s(t.name))])}))],1),e._v(" "),a("div",{staticClass:"se-name"},[e._v("下次联系时间")]),e._v(" "),a("el-date-picker",{staticClass:"se-datepicker",attrs:{type:"datetime",placeholder:"选择日期","default-value":new Date,"value-format":"yyyy-MM-dd HH:mm:ss",editable:!1},model:{value:e.nextTime,callback:function(t){e.nextTime=t},expression:"nextTime"}}),e._v(" "),a("el-checkbox",{model:{value:e.isEvent,callback:function(t){e.isEvent=t},expression:"isEvent"}},[e._v("添加到日程提醒")]),e._v(" "),a("el-button",{staticClass:"se-send",attrs:{type:"primary"},nativeOn:{click:function(t){return e.sendInfo(t)}}},[e._v("发布")])],1)],1),e._v(" "),a("div",{staticClass:"log-cont"},[e.logTypes.length>0?a("flexbox",{staticStyle:{"border-bottom":"1px solid #E6E6E6"}},e._l(e.logTypes,function(t,n){return a("flexbox",{key:n,staticStyle:{width:"auto"},nativeOn:{click:function(a){e.logTabsClick(t,n)}}},[a("div",{staticClass:"log-tabs-item",style:{color:e.logType==t.type?"#F18C70":"#777"}},[e._v(e._s(t.name))]),e._v(" "),e.logTypes.length-1!=n?a("div",{staticClass:"log-tabs-line"}):e._e()])})):e._e(),e._v(" "),a(e.componentsName,{tag:"component",attrs:{id:e.id,crmType:e.crmType}})],1)])},[],!1,null,"af7abf32",null);d.options.__file="ClueFollow.vue";var u=d.exports,m=a("U05J"),p=a("C+sD"),f=a("8DbX"),h=a("EgJF"),v=(a("a/LZ"),a("4+0Q")),g={name:"clue-detail",components:{SlideView:i.a,CRMDetailHead:l.a,ClueFollow:u,CRMBaseInfo:m.a,RelativeFiles:p.a,RelativeHandle:f.a,CRMCreateView:h.default},mixins:[v.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"leads",detailData:{},headDetails:[{title:"姓名",value:""},{title:"线索来源",value:""},{title:"手机",value:""},{title:"负责人",value:""},{title:"创建时间",value:""}],tabnames:[{label:"跟进记录",name:"followlog"},{label:"基本信息",name:"basicinfo"},{label:"附件",name:"file"},{label:"操作记录",name:"operationlog"}],tabCurrentName:"followlog",isCreate:!1}},computed:{tabName:function(){return"followlog"==this.tabCurrentName?"clue-follow":"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"file"==this.tabCurrentName?"relative-files":"operationlog"==this.tabCurrentName?"relative-handle":""}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(n.f)({leadsId:this.id}).then(function(t){e.detailData=t.data,e.headDetails[0].value=t.data.name,e.headDetails[1].value=t.data.线索来源,e.headDetails[2].value=t.data.mobile,e.headDetails[3].value=t.data.ownerUserName,e.headDetails[4].value=t.data.createTime,e.loading=!1}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(e,t){},editSaveSuccess:function(){this.getDetial()}}},b=(a("ZQxE"),Object(c.a)(g,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{listenerIDs:e.listenerIDs,noListenerIDs:e.noListenerIDs,noListenerClass:e.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{"side-close":e.hideView}},[e.canShowDetail?a("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限",direction:"column",align:"stretch"}},[a("c-r-m-detail-head",{attrs:{crmType:"leads",detail:e.detailData,headDetails:e.headDetails,id:e.id},on:{handle:e.detailHeadHandle,close:e.hideView}}),e._v(" "),a("div",{staticClass:"tabs"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabnames,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.name}})}))],1),e._v(" "),a("div",{staticClass:"t-loading-content",attrs:{id:"follow-log-content"}},[a("keep-alive",[a(e.tabName,{tag:"component",attrs:{crmType:"leads",detail:e.detailData,id:e.id}})],1)],1)],1):e._e(),e._v(" "),e.isCreate?a("c-r-m-create-view",{attrs:{"crm-type":"leads",action:{type:"update",id:this.id,batchId:e.detailData.batchId}},on:{"save-success":e.editSaveSuccess,"hiden-view":function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"da333068",null));b.options.__file="ClueDetail.vue";t.a=b.exports},pJnx:function(e,t,a){}}]);