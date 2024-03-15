javascript:ftb();function ha(e,c){try{document.getElementById(e).innerHTML=c}catch(e){}}function barGraph(p,val,c,min,max){for(val=val.slice(0,-c),console.log(val),val>max&&(val=max),val<min&&(val=min),ap="a"+p,window[ap].unshift(val),window[ap].length>boxcar&&window[ap].pop(),html='<svg version="1.1" viewBox="0 0 '+gw+" "+gh+'" width="'+gw+'" height="'+gh+'" preserveAspectRatio="xMaxYMax slice" style="border:1px solid #ccc;padding:1px;margin-top:-6px;width: '+gw+'px;">',x=0;x<window[ap].length;x++)pax=(gt+1)*(x+1),pay=gh-1,pby=gh-(window[ap][x]-min)/(max-min)*gh,isNaN(pby)&&(pby=pay),pc=(window[ap][x]-min)/(max-min)*100,pc<50?color="yellow":pc<85?color="green":color="orange",html+='<line x1="'+pax+'" y1="'+pay+'" x2="'+pax+'" y2="'+pby+'" stroke="'+color+'" stroke-width="'+gt+'"></line>';html+="</svg>",document.getElementById("b"+p).innerHTML=html}function currentBand(){if(boxcar=gw/(gt+1),1!=suspend){try{document.getElementById("dhcp_mask").style.display="block",document.getElementById("dhcp_dns").style.display="block"}catch(e){}xhr=new XMLHttpRequest,xhr.open("GET","/api/device/signal",!0),xhr.setRequestHeader("Content-type","application/json; charset=UTF-8"),xhr.send(),xhr.onload=function(){if(200===xhr.status){for(data=xhr.responseText,signal=data,vars=["nrrsrq","nrrsrp","nrsinr","rssi","rsrp","rsrq","sinr","dlbandwidth","ulbandwidth","band","cell_id","plmn"],i=0;i<vars.length;i++)window[vars[i]]=extractXML(vars[i],data),ha(vars[i],window[vars[i]]);nrdefined="undefined"!=typeof nrrsrp,nrdefined?(document.getElementById("nr").style.display="inline-block",barGraph("nrrsrp",nrrsrp,3,-130,-60),barGraph("nrrsrq",nrrsrq,2,-16,-3),barGraph("nrsinr",nrsinr,2,0,24)):document.getElementById("nr").style.display="none",barGraph("rsrp",rsrp,3,-130,-60),barGraph("rsrq",rsrq,2,-16,-3),barGraph("sinr",sinr,2,0,24),mp=cell_id.indexOf("-"),mp>0?enbid=Number(cell_id.substr(0,mp)):(hex=Number(cell_id).toString(16),hex2=hex.substring(0,hex.length-2),enbid=parseInt(hex2,16).toString()),ha("enbid",enbid),"22201"==plmn&&(plmn="2221"),"22299"==plmn&&(plmn="22288"),"22250"==plmn&&6==enbid.length&&(plmn="22288"),link_lte="https://lteitaly.it/internal/map.php#bts="+plmn+"."+enbid,document.getElementById("lteitaly").setAttribute("href",link_lte)}else console.log("err:"+xhr.status)},getNetmode(),getStatus(),getAntenna()}}function getAntenna(){xhra=new XMLHttpRequest,xhra.open("GET","/api/device/antenna_type",!0),xhra.setRequestHeader("Content-type","application/json; charset=UTF-8"),xhra.send(),xhra.onload=function(){200===xhra.status&&(r=xhra.responseText,antenna1type=extractXML("antenna1type",r),antenna2type=extractXML("antenna2type",r),"1"==antenna1type?ha("a1","EXT"):ha("a1","INT"),"1"==antenna2type?ha("a2","EXT"):ha("a2","INT"))}}function getNetmode(){xhrn=new XMLHttpRequest,xhrn.open("GET","/api/net/net-mode",!0),xhrn.setRequestHeader("Content-type","application/json; charset=UTF-8"),xhrn.send(),xhrn.onload=function(){200===xhrn.status&&(netmode=xhrn.responseText,lteband=extractXML("LTEBand",netmode),ha("allowed",_4GType(lteband)))}}function getStatus(){xhrs=new XMLHttpRequest,xhrs.open("GET","/api/monitoring/status",!0),xhrs.setRequestHeader("Content-type","application/json; charset=UTF-8"),xhrs.send(),xhrs.onload=function(){200===xhrs.status&&(ms=xhrs.responseText,is4gp=1011==extractXML("CurrentNetworkTypeEx",ms)?1:0,is4gp?(document.getElementById("mode").style.color="red",ha("mode","4G+")):(document.getElementById("mode").style.color="#aaa",ha("mode","--")))}}function err(r,s,e){alert("Communication Error"),console.log(r),console.log(s),console.log(e)}function extractXML(tag,data){try{return data.split("</"+tag+">")[0].split("<"+tag+">")[1]}catch(err){return err.message}}function _4GType(data){for(data_out="",x=0;x<90;x++)tb=Math.pow(2,x),BigInt("0x"+data)&BigInt(tb)?(data_out+="B"+String(x+1)+"+",color="#686"):color="transparent";return data_out=data_out.replace(/\++$/,""),data_out}function ltebandselection(bs){var band;if(mainband&&(mainband=null),0==arguments.length){if((band=prompt("Please input LTE bands number, separated by + char (example 1+3+20).If you want to use every supported bands, write 'AUTO'.","AUTO"))&&(band=band.toLowerCase()),null==band||""===band)return}else var band=arguments[0];var bs=band.split("+"),ltesum=0;if("AUTO"===band.toUpperCase())ltesum="7FFFFFFFFFFFFFFF";else{for(var i=0;i<bs.length;i++){if(-1!=bs[i].toLowerCase().indexOf("m")&&(bs[i]=bs[i].replace("m",""),mainband=bs[i]),"AUTO"===bs[i].toUpperCase()){ltesum="7FFFFFFFFFFFFFFF";break}ltesum+=Math.pow(2,parseInt(bs[i])-1)}ltesum=ltesum.toString(16)}if(mainband)return _2ndrun=bs,void ltebandselection(String(mainband));suspend=1,ha("t","! PLEASE WAIT !"),document.getElementById("t").style.display="block",xhrh=new XMLHttpRequest,xhrh.open("GET","/html/home.html",!0),xhrh.setRequestHeader("Content-type","application/json; charset=UTF-8"),xhrh.send(),xhrh.onload=function(){if(200===xhrh.status){var datas=xhrh.responseText.split('name="csrf_token" content="'),token=datas[datas.length-1].split('"')[0],nw="00";document.getElementById("force4g").checked&&(nw="03"),console.log(nw),setTimeout((function(){xhrp=new XMLHttpRequest,xhrp.open("POST","/api/net/net-mode",!0),xhrp.setRequestHeader("Content-type","application/json; charset=UTF-8"),xhrp.setRequestHeader("__RequestVerificationToken",token),cmd="<request><NetworkMode>"+nw+"</NetworkMode><NetworkBand>3FFFFFFF</NetworkBand><LTEBand>"+ltesum+"</LTEBand></request>",xhrp.send(cmd),xhrp.onload=function(){200===xhrp.status?(ha("band",'<span style="color:green;">OK</span>'),_2ndrun?window.setTimeout((function(){ltebandselection(_2ndrun.join("+")),_2ndrun=!1}),2e3):(suspend=0,document.getElementById("t").style.display="none")):err()}}),2e3)}}}function ftb(){document.body.insertAdjacentHTML("afterbegin",'<style> #rsrq,#nrrsrq, #rsrp,#nrrsrp, #rssi, #enbid, #sinr,#nrsinr, #cell_id, #band, #allowed, #a1, #a2 {color: #b00; font-weight: strong; } .f {float: left; border: 1px solid #bbb; border-radius: 5px; padding: 10px; line-height: 2em; margin: 5px; } .f ul {margin: 0; padding: 0; } .f ul li {display: inline; margin-right: 10px; } #mode {margin-right: 0 !important; } #enbid {font-weight: bold; text-decoration: underline; } .p {border-bottom: 1px solid #ccc; width: auto; height: 20px; } .v {height: 20px; border-right: 1px solid #ccc; } .sb {padding: 10px; border-radius: 10px; display: inline-block; margin: 10px 0 10px 10px; } #t {color: white; background-color: #888; margin: 10px; padding: 25px; border-radius: 10px; display: none; text-align: center; font-weight: bolder; } .v {padding-left: 20px; } </style> <div style="display:block;overflow:auto;"><div class="f"><b><div style="color: #ff0000">RSRP</div>(Reference Signals Received Power / potenza del segnale di riferimento ricevuto):</b><span id="rsrp"></span><div id="brsrp"></div><b><div style="color: #ff0000">RSRQ</div>(Reference Signal Received Quality / segnale di riferimento alla qualità radio):</b><span id="rsrq"></span><div id="brsrq"></div><b><div style="color: #ff0000">SINR</div>(Signal to Interference plus Noise Ratio / rapporto segnale/rumore della connessione):</b><span id="sinr"></span><div id="bsinr"></div></div><div id="nr" class="f">NR RSRP:<span id="nrrsrp"></span><div id="bnrrsrp"></div>NR RSRQ:<span id="nrrsrq"></span><div id="bnrrsrq"></div>NR SINR:<span id="nrsinr"></span><div id="bnrsinr"></div></div></div></br></br></br>
<HR><HR>	
<table>
<colgroup>
<col style="text-align: left;">
<col style="text-align: left;">
<col style="text-align: left;"> </colgroup>
<thead>
<tr>
<th style="text-align: left;">RSRP</th>
<th style="text-align: left;">Potenza del segnale</th>
<th style="text-align: left;">Descrizione</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">&gt;= –80 dBm</td>
<td style="text-align: left;">Eccellente</td>
<td style="text-align: left;">Segnale forte con velocità massima di trasmissione dati</td>
</tr>
<tr>
<td style="text-align: left;">da –80 dBm a –90 dBm</td>
<td style="text-align: left;">Buono</td>
<td style="text-align: left;">Segnale forte con buona velocità di trasmissione dati</td>
</tr>
<tr>
<td style="text-align: left;">da –90 dBm a –100 dBm</td>
<td style="text-align: left;">Da sufficiente fino a insufficiente</td>
<td style="text-align: left;">È possibile ottenere velocità di trasmissione dati affidabili, ma sono anche possibili periodi di interruzione. Quando RSRP si avvicina a –100, le prestazioni diminuiscono drasticamente</td>
</tr>
<tr>
<td style="text-align: left;">&lt;= –100 dBm</td>
<td style="text-align: left;">Nessun segnale</td>
<td style="text-align: left;">Disconnesso</td>
</tr>
</tbody>
</table>
<HR><HR>
<table>
<colgroup>
<col style="text-align: left;">
<col style="text-align: left;">
<col style="text-align: left;"> </colgroup>
<thead>
<tr>
<th style="text-align: left;">RSRQ</th>
<th style="text-align: left;">Potenza del segnale</th>
<th style="text-align: left;">Descrizione</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">&gt;= –10 dB</td>
<td style="text-align: left;">Eccellente</td>
<td style="text-align: left;">Segnale forte con velocità massima di trasmissione dati</td>
</tr>
<tr>
<td style="text-align: left;">da –10 dB a –15 dB</td>
<td style="text-align: left;">Buono</td>
<td style="text-align: left;">Segnale forte con buona velocità di trasmissione dati</td>
</tr>
<tr>
<td style="text-align: left;">da –15 dB a –20 dB</td>
<td style="text-align: left;">Da sufficiente fino a insufficiente</td>
<td style="text-align: left;">È possibile ottenere velocità di trasmissione dati affidabili, ma sono anche possibili periodi di interruzione. Quando RSRP si avvicina a –20, le prestazioni diminuiscono drasticamente</td>
</tr>
<tr>
<td style="text-align: left;">&lt;= –20 dB</td>
<td style="text-align: left;">Nessun segnale</td>
<td style="text-align: left;">Disconnesso</td>
</tr>
</tbody>
</table>
<HR><HR>
<table>
<colgroup>
<col style="text-align: left;">
<col style="text-align: left;">
<col style="text-align: left;"> </colgroup>
<thead>
<tr>
<th style="text-align: left;">SINR</th>
<th style="text-align: left;">Potenza del segnale</th>
<th style="text-align: left;">Descrizione</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">&gt;= 20 dB</td>
<td style="text-align: left;">Eccellente</td>
<td style="text-align: left;">Segnale forte con velocità massima di trasmissione dati</td>
</tr>
<tr>
<td style="text-align: left;">da 13 dB a 20 dB</td>
<td style="text-align: left;">Buono</td>
<td style="text-align: left;">Segnale forte con buona velocità di trasmissione dati</td>
</tr>
<tr>
<td style="text-align: left;">da 0 dB a 13 dB</td>
<td style="text-align: left;">Da insufficiente fino a sufficiente</td>
<td style="text-align: left;">È possibile ottenere velocità di trasmissione dati affidabili, ma sono anche possibili periodi di interruzione. Quando RSRP si avvicina a 0, le prestazioni diminuiscono drasticamente</td>
</tr>
<tr>
<td style="text-align: left;">&lt;= 0 dB</td>
<td style="text-align: left;">Nessun segnale</td>
<td style="text-align: left;">Disconnesso</td>
</tr>
</tbody>
</table>
<HR><HR>
</><div style="display:block;overflow: auto;"> <div id="t"></div> <div class="f"> <ul> <li><a style="font-weight:bolder;background-color: #448;color:white;padding: 10px;border-radius:10px;" onclick="ltebandselection()">SET</a></li> <li><label>Force 4G</label><input id="force4g" type="checkbox"></li> </ul> </div> <div class="f"> <ul> <li>RSSI:<span id="rssi"></span></li> <li>Ant:<span id="a1"></span>/<span id="a2"></span></li> </ul> </div>  <div class="f"> <ul> <li id="mode">Che la banda sia con te! Miononno &#9829;</li> </ul> </div> <div class="f"> <ul> <li>ENB ID:<a id="lteitaly" target="lteitaly" href="#"><span id="enbid">#</span></a></li> <li>CELL ID:<span id="cell_id">#</span></li> <li>MAIN:<span id="band"></span>(<span id="dlbandwidth"></span>/<span id="ulbandwidth"></span>)</li> <li>ALLOWED:<span id="allowed"></span></li> </ul> </div>')}mainband=null,_2ndrun=null,suspend=0,status="",netmode="",signal="",version="5.0",gw=500,gh=30,gt=3,[arsrp,arsrq,asinr,anrrsrp,anrrsrq,anrsinr]=[[],[],[],[],[],[]],console.log("Code by Miononno - v"+version),console.log("type: netmode , signal , status"),window.setInterval(currentBand,2000);