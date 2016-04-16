<?php

namespace App\Http\Controllers;

/**
 * Handle work page.
 *
 * @author Alexandru Bugarin <alexandru.bugarin@gmail.com>
 */
class WorkController extends Controller {

    /**
     * Render work page.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index() {
        return view('pages.work.index');
    }

}