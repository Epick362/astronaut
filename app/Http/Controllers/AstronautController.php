<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Astronaut;
use App\Http\Requests;

class AstronautController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Astronaut::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'fname' => 'required',
            'lname' => 'required',
            'birth' => 'required',
            'power' => 'required'
        ]);

        $astronaut = new Astronaut;
        $astronaut->fname = $request->fname;
        $astronaut->lname = $request->lname;
        $astronaut->birth = $request->birth;
        $astronaut->power = $request->power;

        $astronaut->save();

        return response()->json(['status' => 'created']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $astronaut = Astronaut::findOrFail($id);
        $astronaut->delete();

        return response()->json(['status' => 'deleted']);
    }
}
