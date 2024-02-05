<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePessoasRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nome' => ['required'],
            'cpf' => ['required', 'cpf', 'max:14'],
            'logradouro' => 'nullable',
            'numero' => ['nullable'],
            'complemento' => ['nullable'],
            'bairro' => ['nullable'],
            'cidade' => ['nullable'],
            'uf' => ['nullable'], 
            'cep' => ['nullable'],
            'telefones.*.telefone' => ['nullable', 'telefone'],
            'telefones.*.whastapp' => ['nullable', 'boolean'],
            'email' => ['nullable', 'email'],
        ];
    }
}
