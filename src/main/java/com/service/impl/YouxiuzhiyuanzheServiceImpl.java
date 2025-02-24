package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.YouxiuzhiyuanzheDao;
import com.entity.YouxiuzhiyuanzheEntity;
import com.service.YouxiuzhiyuanzheService;
import com.entity.vo.YouxiuzhiyuanzheVO;
import com.entity.view.YouxiuzhiyuanzheView;

@Service("youxiuzhiyuanzheService")
public class YouxiuzhiyuanzheServiceImpl extends ServiceImpl<YouxiuzhiyuanzheDao, YouxiuzhiyuanzheEntity> implements YouxiuzhiyuanzheService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<YouxiuzhiyuanzheEntity> page = this.selectPage(
                new Query<YouxiuzhiyuanzheEntity>(params).getPage(),
                new EntityWrapper<YouxiuzhiyuanzheEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<YouxiuzhiyuanzheEntity> wrapper) {
		  Page<YouxiuzhiyuanzheView> page =new Query<YouxiuzhiyuanzheView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<YouxiuzhiyuanzheVO> selectListVO(Wrapper<YouxiuzhiyuanzheEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public YouxiuzhiyuanzheVO selectVO(Wrapper<YouxiuzhiyuanzheEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<YouxiuzhiyuanzheView> selectListView(Wrapper<YouxiuzhiyuanzheEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public YouxiuzhiyuanzheView selectView(Wrapper<YouxiuzhiyuanzheEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
