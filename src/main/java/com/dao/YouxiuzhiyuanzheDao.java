package com.dao;

import com.entity.YouxiuzhiyuanzheEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.YouxiuzhiyuanzheVO;
import com.entity.view.YouxiuzhiyuanzheView;


/**
 * 优秀志愿者
 * 
 * @author 
 * @email 
 * @date 2023-02-16 09:57:47
 */
public interface YouxiuzhiyuanzheDao extends BaseMapper<YouxiuzhiyuanzheEntity> {
	
	List<YouxiuzhiyuanzheVO> selectListVO(@Param("ew") Wrapper<YouxiuzhiyuanzheEntity> wrapper);
	
	YouxiuzhiyuanzheVO selectVO(@Param("ew") Wrapper<YouxiuzhiyuanzheEntity> wrapper);
	
	List<YouxiuzhiyuanzheView> selectListView(@Param("ew") Wrapper<YouxiuzhiyuanzheEntity> wrapper);

	List<YouxiuzhiyuanzheView> selectListView(Pagination page,@Param("ew") Wrapper<YouxiuzhiyuanzheEntity> wrapper);
	
	YouxiuzhiyuanzheView selectView(@Param("ew") Wrapper<YouxiuzhiyuanzheEntity> wrapper);
	

}
