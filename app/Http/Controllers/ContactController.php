<?php

namespace App\Http\Controllers;

/**
 * Handle contact page.
 *
 * @author Alexandru Bugarin <alexandru.bugarin@gmail.com>
 */
class ContactController extends Controller {

    /**
     * Render contact page.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index() {
        return view('pages.contact.index');
    }

}