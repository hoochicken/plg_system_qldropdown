<?php
/**
 * @package		plg_system_qldropdown
 * @copyright	Copyright (C) 2023 ql.de All rights reserved.
 * @author 		Ingo Holewczuk info@ql.de; Mareike Riegel mareike.riegel@ql.de
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

//no direct access

use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Component\Finder\Administrator\Indexer\Parser\Html;

defined('_JEXEC') or die ('Restricted Access');

jimport('joomla.plugin.plugin');

class plgSystemQldropdown extends CMSPlugin
{
    public $params;

    /**
     * constructor
     *setting language
     */
    public function __construct(& $subject, $config)
    {
        $lang = Factory::getApplication()->getLanguage();
        $lang->load('plg_content_qldropdown', dirname(__FILE__));
        parent::__construct($subject, $config);
    }

    /**
     * onContentPrepare :: some kind of controller of plugin
     */
    public function onAfterDispatch()
    {
        if (1 == $this->params->get('jquery', 0)) Html::_('jquery.framework');
        $this->addStyles();
        $this->addJavascript();
    }

    /**
     *
     */
    public function addStyles()
    {
        $wam = Factory::getApplication()->getDocument()->getWebAssetManager();
        $wam->registerAndUseStyle('plg_system_qldropdown', 'plg_system_qldropdown/qldropdown.css');
    }

    /**
     *
     */
    public function addJavascript()
    {
        $wam = Factory::getApplication()->getDocument()->getWebAssetManager();
        $wam->registerAndUseScript('plg_system_qldropdown', 'plg_system_qldropdown/qldropdown.js');
        if ($this->params->get('hide', 1)) $wam->registerAndUseScript('plg_system_qldropdown-c', 'plg_system_qldropdown/qldropdown-content.js');
    }

}