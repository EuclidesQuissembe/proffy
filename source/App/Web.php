<?php


namespace Source\App;

use Source\Core\Controller;

/**
 * Proffy | Class Web
 *
 * @author Euclides Bernardo <euclidesquissembebernado@gmail.com>
 * @package Source\App
 */
class Web extends Controller
{
    /**
     * Web constructor.
     */
    public function __construct()
    {
        parent::__construct(CONF_VIEW_PATH . CONF_VIEW_THEME);
    }

    /**
     * HOME METHOD
     * Show the index page of site
     */
    public function home(): void
    {

    }

    /**
     * ERROR METHOD
     * Responsible for showing the error and redirecting the user to the right site.
     *
     * @param array|null $data
     */
    public function error(?array $data): void
    {

    }
}
