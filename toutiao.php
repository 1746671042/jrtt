<?php
header('Access-Control-Allow-Origin:*');//允许跨域
$type = $_GET["type"];

//echo $type.'21212';
function send_post($url,$post_data){
	$postdata = http_build_query($post_data);
	$options = array(
	'http' =>array(
	'method' => 'POST',
	 'header' =>'Content-type:application/x-www-form-urlencoded',
	 'content' =>$postdata
	 ));
	 $conttext = stream_context_create($options);
	 $result = file_get_contents($url,FALSE,$conttext);
	 return $result;
}
$post_data = array(
	'type'=>$type,
	'key'=>"36bdc7ebb2c1324f25e5506816074589"
);
$url = "http://v.juhe.cn/toutiao/index?";
$datas = send_post($url, $post_data);
//var_dump(json_decode($datas, true));
echo $datas;
?>
