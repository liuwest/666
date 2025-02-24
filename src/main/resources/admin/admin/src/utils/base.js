const base = {
    get() {
        return {
            url : "http://localhost:8080/springboote2y4d/",
            name: "springboote2y4d",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboote2y4d/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于java的社区志愿者信息管理系统设计与实现 "
        } 
    }
}
export default base
