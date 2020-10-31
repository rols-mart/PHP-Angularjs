<?php
namespace Drupal\angularjs_page\Controller;

use Drupal\Core\Controller\ControllerBase;

class AngularJSPageController extends ControllerBase {

  public function viewAngularJSPage() {
    $title = t('Fist articles');
    $build['myelement'] = array(
      '#theme' => 'angularjs_page_view',
      '#title' => $title,
    );
    $build['myelement']['#attached']['library'][] = 'angularjs_page/angularjs';
    $build['myelement']['#attached']['library'][] = 'angularjs_page/angularjs_page';
    return $build;
  }
}
