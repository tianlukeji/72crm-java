package com.kakarote.crm9.erp.work.entity.base;

import com.jfinal.plugin.activerecord.IBean;
import com.jfinal.plugin.activerecord.Model;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseWorkTaskClass<M extends BaseWorkTaskClass<M>> extends Model<M> implements IBean {

	public void setClassId(Integer classId) {
		set("class_id", classId);
	}

	public Integer getClassId() {
		return getInt("class_id");
	}

	public void setName(String name) {
		set("name", name);
	}

	public String getName() {
		return getStr("name");
	}

	public void setCreateTime(java.util.Date createTime) {
		set("create_time", createTime);
	}

	public java.util.Date getCreateTime() {
		return get("create_time");
	}

	public void setCreateUserId(Integer createUserId) {
		set("create_user_id", createUserId);
	}

	public Integer getCreateUserId() {
		return getInt("create_user_id");
	}

	public void setStatus(Integer status) {
		set("status", status);
	}

	public Integer getStatus() {
		return getInt("status");
	}

	public void setWorkId(Integer workId) {
		set("work_id", workId);
	}

	public Integer getWorkId() {
		return getInt("work_id");
	}

	public void setOrderNum(Integer orderNum) {
		set("order_num", orderNum);
	}

	public Integer getOrderNum() {
		return getInt("order_num");
	}

}