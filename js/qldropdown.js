/**
 * @package    plg_system_qldropdown
 * @copyright  Copyright (C) 2022 ql.de All rights reserved.
 * @author    Ingo Holewczuk info@ql.de; Mareike Riegel mareike.riegel@ql.de
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 */
jQuery(function () {
  jQuery('ul.qldropdown li ul').css('display', 'none');

  jQuery('ul.qldropdown:not(".mouseover") li a').click(function () {
    //alert('cl');
    let returnValue = qluseNavigation(jQuery(this));
    return returnValue;
  });
  jQuery('ul.qldropdown.mouseover li a').mouseover(function () {
    //alert('mo - mo');
    let returnValue = qluseNavigation(jQuery(this));
    return returnValue;
  });
  jQuery('ul.qldropdown.mouseover li a').click(function () {
    //alert('mo - ck');
    let returnValue = qluseNavigation(jQuery(this));
    return true;
  });
  jQuery('ul.qldropdown.activeslide li.active').children('ul').slideDown();
});

function qluseNavigation(thisObject) {
  let parentLi = thisObject.closest('li');
  if (!parentLi.hasClass('parent')) {
    return true;
  }
  let state = parentLi.children('ul').css('display');
  /*hide all*/
  let siblingsLi = parentLi.siblings();
  siblingsLi.removeClass('hover');
  siblingsLi.children('ul').slideUp();
  if (undefined === state) {
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
