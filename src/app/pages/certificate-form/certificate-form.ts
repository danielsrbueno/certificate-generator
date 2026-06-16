import { Component, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ICertificate } from '../../interfaces/certificate';
import { Certificate } from '../../services/certificate';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css',
})
export class CertificateForm {
  certificateActivity: string = ""
  certificate: ICertificate = {
    id: "",
    studentName: "",
    activities: [],
    createdAt: ""
  }

  constructor (private certificateService: Certificate, private router: Router) {}

  @ViewChild('form') form!: NgForm
  validField (control: NgModel) {
    return control.invalid && control.touched
  }

  validToCreate () {
    return this.certificate.studentName.length > 2 && this.certificate.activities.length > 0
  }

  addToActivities () {
    this.certificate.activities.push(this.certificateActivity)
    this.certificateActivity = ""
  }

  removeFromActivities (index: number) {
    this.certificate.activities.splice(index, 1)
  }

  getCurrentDate () {
    const date = new Date()
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`
  }

  submit () {
    this.certificate.id = uuidv4()
    this.certificate.createdAt = this.getCurrentDate()
    this.certificateService.addCertificate(this.certificate)

    this.form.resetForm()

    this.router.navigate(["/certificates", this.certificate.id])

    this.certificate = this.resetCertificate()
  }

  resetCertificate (): ICertificate {
    return  {
      id: "",
      activities: [],
      studentName: "",
      createdAt: ""
    }
  }
}
