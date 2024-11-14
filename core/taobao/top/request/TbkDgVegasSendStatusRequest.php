<?php
/**
 * TOP API: taobao.tbk.dg.vegas.send.status request
 * 
 * @author auto create
 * @since 1.0, 2024.06.01
 */
class TbkDgVegasSendStatusRequest
{
	/** 
	 * 查询红包类型，1-超级红包，2-福利购，3-签到红包，4-福利直降，5-幸运赢免单，不传时默认查询超级红包数据
	 **/
	private $activityCategory;
	
	/** 
	 * 入参类型(该模式下返回的结果为模糊匹配结果，和实际情况可能存在误差)： 1. IMEI 2. IDFA 3. OAID 4. MOBILE
	 **/
	private $deviceType;
	
	/** 
	 * 加密后的值，需用MD5加密，32位小写
	 **/
	private $deviceValue;
	
	/** 
	 * 媒体pid
	 **/
	private $pid;
	
	/** 
	 * 渠道管理id
	 **/
	private $relationId;
	
	/** 
	 * 会员运营id
	 **/
	private $specialId;
	
	/** 
	 * 已废弃，请勿传入
	 **/
	private $thorBizCode;
	
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

	public function setDeviceType($deviceType)
	{
		$this->deviceType = $deviceType;
		$this->apiParas["device_type"] = $deviceType;
	}

	public function getDeviceType()
	{
		return $this->deviceType;
	}

	public function setDeviceValue($deviceValue)
	{
		$this->deviceValue = $deviceValue;
		$this->apiParas["device_value"] = $deviceValue;
	}

	public function getDeviceValue()
	{
		return $this->deviceValue;
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

	public function setSpecialId($specialId)
	{
		$this->specialId = $specialId;
		$this->apiParas["special_id"] = $specialId;
	}

	public function getSpecialId()
	{
		return $this->specialId;
	}

	public function setThorBizCode($thorBizCode)
	{
		$this->thorBizCode = $thorBizCode;
		$this->apiParas["thor_biz_code"] = $thorBizCode;
	}

	public function getThorBizCode()
	{
		return $this->thorBizCode;
	}

	public function getApiMethodName()
	{
		return "taobao.tbk.dg.vegas.send.status";
	}
	
	public function getApiParas()
	{
		return $this->apiParas;
	}
	
	public function check()
	{
		
	}
	
	public function putOtherTextParam($key, $value) {
		$this->apiParas[$key] = $value;
		$this->$key = $value;
	}
}
