<?php

namespace App\Validators;

use Illuminate\Support\Facades\Validator;

class CustomValidators
{
    public static function register()
    {
        Validator::extend('cpf', function ($attribute, $value, $parameters, $validator) {
            $cpf = preg_replace('/[^0-9]/', '', $value);

            // Verifica se o CPF tem 11 dígitos ou se todos os dígitos são iguais
            if (strlen($cpf) != 11 || preg_match('/(\d)\1{10}/', $cpf)) {
                return false;
            }

            $number_quantity_to_loop = [9, 10];
            foreach ($number_quantity_to_loop as $item) {

                $sum = 0;
                $number_to_multiplicate = $item + 1;

                for ($index = 0; $index < $item; $index++) {

                    $sum += $cpf[$index] * ($number_to_multiplicate--);
                }

                $result = (($sum * 10) % 11);

                if ($cpf[$item] != $result) {
                    return false;
                };
            }

            return true;
        });

        Validator::extend('telefone', function ($attribute, $value, $parameters, $validator) {
            $telefone = preg_replace('/[^0-9]/', '', $value);

            // Verifica se o telefone tem 11 dígitos
            if (strlen($telefone) != 11) {
                return false;
            }

            // Verifica se todos os dígitos são iguais
            if (preg_match('/(\d)\1{10}/', $telefone)) {
                return false;
            }

            // Verifica se o DDD é válido (11, 12, 13, ..., 98, 99)
            $ddd = substr($telefone, 0, 2);
            $dddsValidos = range(11, 99);

            if (!in_array($ddd, $dddsValidos)) {
                return false;
            }

            return true;
        });
    }
}
