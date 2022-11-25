<?php
/**
 * @package		plg_system_qldropdown
 * @copyright	Copyright (C) 2022 ql.de All rights reserved.
 * @author 		Ingo Holewczuk info@ql.de; Mareike Riegel mareike.riegel@ql.de
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

//no direct access

use Joomla\CMS\Factory;

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
        $this->addStyles();
        $this->addJavascript();
    }

    /**
     *
     */
    public function addStyles()
    {
        if ($this->isJoomla4((int) JVERSION)) {
            $wam = Factory::getDocument()->getWebAssetManager();
            $wam->registerAndUseStyle('plg_system_qldropdown', 'plg_system_qldropdown/qldropdown.css');
        } else {
            JHtml::stylesheet('plg_system_qldropdown/qldropdown.css', array(), true);
        }
        if ($this->params->get('stylesActive', '0')) {
            JFactory::getDocument()->addStyleDeclaration($this->getStyles($this->params));
        }
    }

    /**
     *
     */
    public function addJavascript()
    {
        if ($this->isJoomla4((int) JVERSION)) {
            $wam = Factory::getDocument()->getWebAssetManager();
            $wam->registerAndUseScript('plg_system_qldropdown', 'plg_system_qldropdown/qldropdown.js');
            if (1 == $this->params->get('hide', 1)) $wam->registerAndUseScript('plg_system_qldropdown-c', 'plg_system_qldropdown/qldropdown-content.js');
        } else {
            JHtml::script('plg_system_qldropdown/qldropdown.js');
            if (1 == $this->params->get('hide', 1)) JHtml::script('plg_system_qldropdown/qldropdown-content.js');
        }
    }

    /**
     *
     */
    public function isJoomla4($version)
    {
        return 4 <= $version;
    }

}