/**
 * @package    plg_system_qldropdown
 * @copyright  Copyright (C) 2023 ql.de All rights reserved.
 * @author    Ingo Holewczuk info@ql.de; Mareike Riegel mareike.riegel@ql.de
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */
jQuery(function () {
  jQuery('ul.qldropdown li ul').css('display', 'none');

  jQuery('ul.qldropdown:not(".mouseover") li a, ul.qldropdown:not(".mouseover") li span').click(function () {
    let returnValue = qluseNavigation(jQuery(this));
    return returnValue;
  });
  jQuery('ul.qldropdown.mouseover li a, ul.qldropdown.mouseover li span').mouseover(function () {
    //alert('mo - mo');
    let returnValue = qluseNavigation(jQuery(this));
    return returnValue;
  });
  jQuery('ul.qldropdown.mouseover li a, ul.qldropdown.mouseover li span').click(function () {
    //alert('mo - ck');
    let returnValue = qluseNavigation(jQuery(this));
    return true;
  });
  jQuery('ul.qldropdown.activeslide li.active').children('ul').slideDown();
});

function qluseNavigation(thisObject) {
  let parentLi = thisObject.parent('li');
  if (!parentLi.has('ul')) return true;
  let state = parentLi.children('ul').css('display');
  let siblingsLi = parentLi.siblings();
  siblingsLi.removeClass('hover');
  siblingsLi.children('ul').slideUp();
  if ('undefined' === typeof state) {
    return true;
  } else if ('none' === state) {
    parentLi.children('ul').slideDown();
    parentLi.addClass('hover');
    return false;
  } else if ('block' === state) {
    parentLi.children('ul').slideUp('fast');
    parentLi.removeClass('hover');
    return false;
  }
  return true;
}