<?php

/**
 * 线下备案专属信息
 * @author auto create
 */
class RegisterInfoDto
{
	
	/** 
	 * 渠道独有 -经营类型
	 **/
	public $career;
	
	/** 
	 * 渠道独有 - 编号
	 **/
	public $certify_number;
	
	/** 
	 * 渠道独有 -信息
	 **/
	public $detail_address;
	
	/** 
	 * 渠道独有 -区
	 **/
	public $location;
	
	/** 
	 * 渠道独有 - 信息
	 **/
	public $phone_number;
	
	/** 
	 * 渠道独有 -类型
	 **/
	public $shop_certify_type;
	
	/** 
	 * 渠道独有 -店铺名称
	 **/
	public $shop_name;
	
	/** 
	 * 渠道独有 -店铺类型
	 **/
	public $shop_type;	
}
?>