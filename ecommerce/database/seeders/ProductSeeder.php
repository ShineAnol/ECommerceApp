<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Product::create([
            'name' => 'Sample Product 1',
            'price' => 99.99,
            'stocks' => 100
        ]);

        Product::create([
            'name' => 'Sample Product 2',
            'price' => 49.99,
            'stocks' => 50
        ]);
    }
}
