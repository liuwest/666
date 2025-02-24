package com.entity.view;

import com.entity.ShenqingjiaruEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 申请加入
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-02-16 09:57:47
 */
@TableName("shenqingjiaru")
public class ShenqingjiaruView  extends ShenqingjiaruEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ShenqingjiaruView(){
	}
 
 	public ShenqingjiaruView(ShenqingjiaruEntity shenqingjiaruEntity){
 	try {
			BeanUtils.copyProperties(this, shenqingjiaruEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
