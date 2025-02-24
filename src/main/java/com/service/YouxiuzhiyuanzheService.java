package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.YouxiuzhiyuanzheEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.YouxiuzhiyuanzheVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.YouxiuzhiyuanzheView;


/**
 * 优秀志愿者
 *
 * @author 
 * @email 
 * @date 2023-02-16 09:57:47
 */
public interface YouxiuzhiyuanzheService extends IService<YouxiuzhiyuanzheEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<YouxiuzhiyuanzheVO> selectListVO(Wrapper<YouxiuzhiyuanzheEntity> wrapper);
   	
   	YouxiuzhiyuanzheVO selectVO(@Param("ew") Wrapper<YouxiuzhiyuanzheEntity> wrapper);
   	
   	List<YouxiuzhiyuanzheView> selectListView(Wrapper<YouxiuzhiyuanzheEntity> wrapper);
   	
   	YouxiuzhiyuanzheView selectView(@Param("ew") Wrapper<YouxiuzhiyuanzheEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<YouxiuzhiyuanzheEntity> wrapper);
   	

}

