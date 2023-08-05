<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class AuthController extends ApiController
{
        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|max:50|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors(), 400);
        }


        $user = User::where('email', $request->post('email'))
                        ->first();
                        
        if(!isset($user)){
            return $this->errorResponse("Invalid login", 401);
        }
/* 
        $password = 'pass1234';

$encryptedPassword = encrypt($password);
$decryptedPassword = decrypt($encryptedPassword); */

// true
        if(decrypt($user->password) == $request->post('password')){
            return $this->successResponseMessage("Valid login", 200);
        }

        return $this->errorResponse("Invalid login", 401);
    }
}
