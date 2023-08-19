<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
Use App\Models\News;

class NewsSeeder extends Seeder
{


    public function run(): void
    {
       News::factory(10)->count(50)->create();
    }
}
