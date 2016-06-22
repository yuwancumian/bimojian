#!/usr/bin/env bash
import ghHttp from './ghHttp';
import 'whatwg-fetch';

ghHttp.getList()
    .then(function(data){
        console.log(data);
    })
