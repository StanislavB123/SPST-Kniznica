/* eslint-disable import/no-anonymous-default-export */
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginError() {
    const issue = toast.error("Prihláste sa prosím");
    return issue;
}