/**
 * @package		plg_system_qldropdown
 * @copyright	Copyright (C) 2022 ql.de All rights reserved.
 * @author 		Ingo Holewczuk info@ql.de; Mareike Riegel mareike.riegel@ql.de
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */
jQuery(function()
{
    jQuery('ul.qldropdown li ul').css('display','none');

    jQuery('ul.qldropdown li a').on('tap',function()
    {
        //alert('tap');
        let returnValue=qluseNavigation(jQuery(this));
        return returnValue;
    });
    jQuery('ul.qldropdown:not(".qlmouseover") li a').click(function()
    {
        //alert('cl');
        var returnValue=qluseNavigation(jQuery(this));
        return returnValue;
    });
    jQuery('ul.qldropdown.qlmouseover li a').mouseover(function()
    {
        //alert('mo - mo');
        var returnValue=qluseNavigation(jQuery(this));
        return returnValue;
    });
    jQuery('ul.qldropdown.qlmouseover li a').click(function()
    {
        //alert('mo - ck');
        var returnValue=qluseNavigation(jQuery(this));
        return true;
    });
    jQuery('ul.qldropdown.activeslide li.active').children('ul').slideDown();
});

function qluseNavigation(thisObject)
{
    var parentLi=thisObject.parent('li');
    if(!parentLi.hasClass('parent')) return true;
    var state=parentLi.children('ul').css('display');
    /*hide all*/
    var siblingsLi=parentLi.siblings();
    siblingsLi.removeClass('hover');
    siblingsLi.children('ul').slideUp();
    if (undefined==state)
    {
        return true;
    }
    else if ('none'==state)
    {
        parentLi.children('ul').slideDown();
        parentLi.addClass('hover');
        return false;
    }
    else if ('block'==state)
    {
        parentLi.children('ul').slideUp('fast');
        parentLi.removeClass('hover');
        return false;
    }
    return true;
}