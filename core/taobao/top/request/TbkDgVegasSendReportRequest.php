<?php
/**
 * TOP API: taobao.tbk.dg.vegas.send.report request
 * 
 * @author auto create
 * @since 1.0, 2024.04.19
 */
class TbkDgVegasSendReportRequest
{
	/** 
	 * 查询红包类型，1-超级红包，2-福利购，3-签到红包，4-福利直降，5-幸运赢免单，不传时默认查询超级红包数据
	 **/
	private $activityCategory;
	
	/** 
	 * 已下线，后续不需要填写
	 **/
	private $activityId;
	
	/** 
	 * 统计日期
	 **/
	private $bizDate;
	
	/** 
	 * 页码
	 **/
	private $pageNo;
	
	/** 
	 * 每页大小
	 **/
	private $pageSize;
	
	/** 
	 * 媒体推广pid
	 **/
	private $pid;
	
	/** 
	 * 渠道关系id
	 **/
	private $relationId;
	
	/** 
	 * 查询维度，不填写默认是pid维度
	 **/
	private $rptDim;
	
	private $apiParas = array();
	
	public function setActivityCategory($activityCategory)
	{
		$this->activityCategory = $activityCategory;
		$this->apiParas["activity_category"] = $activityCategory;
	}

	public function getActivityCategory()
	{
		return $this->activityCategory;
	}

	public function setActivityId($activityId)
	{
		$this->activityId = $activityId;
		$this->apiParas["activity_id"] = $activityId;
	}

	public function getActivityId()
	{
		return $this->activityId;
	}

	public function setBizDate($bizDate)
	{
		$this->bizDate = $bizDate;
		$this->apiParas["biz_date"] = $bizDate;
	}

	public function getBizDate()
	{
		return $this->bizDate;
	}

	public function setPageNo($pageNo)
	{
		$this->pageNo = $pageNo;
		$this->apiParas["page_no"] = $pageNo;
	}

	public function getPageNo()
	{
		return $this->pageNo;
	}

	public function setPageSize($pageSize)
	{
		$this->pageSize = $pageSize;
		$this->apiParas["page_size"] = $pageSize;
	}

	public function getPageSize()
	{
		return $this->pageSize;
	}

	public function setPid($pid)
	{
		$this->pid = $pid;
		$this->apiParas["pid"] = $pid;
	}

	public function getPid()
	{
		return $this->pid;
	}

	public function setRelationId($relationId)
	{
		$this->relationId = $relationId;
		$this->apiParas["relation_id"] = $relationId;
	}

	public function getRelationId()
	{
		return $this->relationId;
	}

	public function setRptDim($rptDim)
	{
		$this->rptDim = $rptDim;
		$this->apiParas["rpt_dim"] = $rptDim;
	}

	public function getRptDim()
	{
		return $this->rptDim;
	}

	public function getApiMethodName()
	{
		return "taobao.tbk.dg.vegas.send.report";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
		RequestCheckUtil::checkNotNull($this->bizDate,"bizDate");
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
