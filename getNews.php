<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
	array('title'=>'29省公布一季度经济数据 GDP增速贵州第1天津垫底','img'=>'./src/img/1.jpg'),
	array('title'=>'环球时报社评：发现了吗 中国周边外交形势正巨变','img'=>'./src/img/2.jpg'),
	array('title'=>'外交部假期前一天连发8次安全提醒 涉及这8国','img'=>'./src/img/3.jpg'),
	array('title'=>'五一起西藏26个国有重点景区门票半价(名单)','img'=>'./src/img/4.jpg'),
	array('title'=>'五一端午能发多少福利？这些省份提高福利标准
','img'=>'./src/img/5.jpg'),
	array('title'=>'企业家送别墅遇阻进展：近9成村民五一将抽签分房','img'=>'./src/img/6.jpg'),
);

echo json_encode($news);

