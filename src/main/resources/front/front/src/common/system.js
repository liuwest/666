export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"项目分类","menuJump":"列表","tableName":"xiangmufenlei"}],"menu":"项目分类管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除"],"menu":"服务项目","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"活动类型","menuJump":"列表","tableName":"huodongleixing"}],"menu":"活动类型管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除"],"menu":"志愿活动","menuJump":"列表","tableName":"zhiyuanhuodong"}],"menu":"志愿活动管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"优秀志愿者","menuJump":"列表","tableName":"youxiuzhiyuanzhe"}],"menu":"优秀志愿者管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","删除","审核"],"menu":"申请加入","menuJump":"列表","tableName":"shenqingjiaru"}],"menu":"申请加入管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-link","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"},{"appFrontIcon":"cuIcon-service","buttons":["新增","查看","修改","删除"],"menu":"在线咨询","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"服务项目列表","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目模块"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"志愿活动列表","menuJump":"列表","tableName":"zhiyuanhuodong"}],"menu":"志愿活动模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"优秀志愿者列表","menuJump":"列表","tableName":"youxiuzhiyuanzhe"}],"menu":"优秀志愿者模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除"],"menu":"申请加入","menuJump":"列表","tableName":"shenqingjiaru"}],"menu":"申请加入管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"服务项目列表","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目模块"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"志愿活动列表","menuJump":"列表","tableName":"zhiyuanhuodong"}],"menu":"志愿活动模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"优秀志愿者列表","menuJump":"列表","tableName":"youxiuzhiyuanzhe"}],"menu":"优秀志愿者模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
