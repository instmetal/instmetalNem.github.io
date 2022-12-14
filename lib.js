$(function()
{
'use strict';
$(".gallery").fancybox({rel:"gallery"});

var c={path: '/'};$('.sidebar1 li ul').hide();
$(".sidebar1  >ul>li>ul").each(function(index, element) {
    index++;
	var item_id="m_"+index;
	$(this).attr("id",index);
	if ($.cookie(item_id)==1) {	$(this).parent().find("a").next().slideToggle('normal');}
		 });	


 $('.sidebar1  >ul>li>a').click(function() 
 						{
						if ($(this).next().size()==0) {return true;}

							$(this).next().slideToggle('normal',
									function()
										{
												var status=$(this).css('display');
												var item_id="m_"+this.id;
												var id=this.id;
												if (status=="block") {$.cookie(item_id, 1,c);} else {$.cookie(item_id,0,c);}
										}
										);
								return false;
						});

});