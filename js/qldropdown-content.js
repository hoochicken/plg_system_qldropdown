/**
 * @package		plg_system_qldropdown
 * @copyright	Copyright (C) 2023 ql.de All rights reserved.
 * @author 		Ingo Holewczuk info@ql.de; Mareike Riegel mareike.riegel@ql.de
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */
jQuery(function(jQuery)
{
    jQuery('body').click(function()
    {
        qldropdownHide()
    });
    function qldropdownHide()
    {
        jQuery('ul.qldropdown li ul').slideUp();
    }
});