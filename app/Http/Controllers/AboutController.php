<?php

namespace App\Http\Controllers;

/**
 * Handle about page.
 *
 * @author Alexandru Bugarin <alexandru.bugarin@gmail.com>
 */
class AboutController extends Controller {

    /**
     * Render about page.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index() {
        return view('pages.about.index');
    }

}