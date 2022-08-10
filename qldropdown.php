<?php
/**
 * @package		plg_system_qldropdown
 * @copyright	Copyright (C) 2017 ql.de All rights reserved.
 * @author 		Ingo Holewczuk info@ql.de; Mareike Riegel mareike.riegel@ql.de
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

//no direct access
defined('_JEXEC') or die ('Restricted Access');

jimport('joomla.plugin.plugin');

class plgSystemQldropdown extends JPlugin
{
    public $params;

    /**
     * constructor
     *setting language
     */
    public function __construct(& $subject, $config)
    {
        parent::__construct($subject, $config);
        $this->loadLanguage();
    }

    /**
     * onContentPrepare :: some kind of controller of plugin
     */
    public function onAfterDispatch()
    {
        if (1 == $this->params->get('jquery', 0)) JHtml::_('jquery.framework');
        JHtml::stylesheet('plg_system_qldropdown/qldropdown.css', array(), true);
        JHtml::script('plg_system_qldropdown/qldropdown.js', false, true);
        if (1 == $this->params->get('hide', 1)) JHtml::script('plg_system_qldropdown/qldropdown-content.js', false, true);
    }
}