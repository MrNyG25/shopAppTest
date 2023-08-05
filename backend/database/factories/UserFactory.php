<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'surname' => $this->faker->name(),
            'phone_number' => "312312",
            'email' => 'admin@mail.com',
            'email_verified_at' => now(),
            'password' => 'eyJpdiI6ImJrTmlEUkl5Z21EK1haWmhTaW9oRUE9PSIsInZhbHVlIjoiM2t4MVczY3lBTUQ5Kzlhc1hTak8rUT09IiwibWFjIjoiZWM5NzRkZDk4NjFmY2Q4NGRlY2I3MTFjYTUzNWZhMWQ3MTlmODE0ZmRmMmU1NDlhYTFhMGViN2Q2NDljNGYxYSIsInRhZyI6IiJ9', // password
            //pass1234
            'is_admin' => true,
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
