<?php

/**
 * 返回素材id
 * @author auto create
 */
class PageResult
{
	
	/** 
	 * 是否有下一页
	 **/
	public $has_next;
	
	/** 
	 * 是否有下一页
	 **/
	public $has_pre;
	
	/** 
	 * 下一页页码
	 **/
	public $next_page;
	
	/** 
	 * 当前页码
	 **/
	public $page_no;
	
	/** 
	 * 每页条数
	 **/
	public $page_size;
	
	/** 
	 * 上一页页码
	 **/
	public $pre_page;
	
	/** 
	 * 数据结果
	 **/
	public $results;
	
	/** 
	 * 总条数
	 **/
	public $total_count;
	
	/** 
	 * 总共页数
	 **/
	public $total_pages;	
}
?>