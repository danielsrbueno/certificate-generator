import { Component, OnInit } from '@angular/core';
import { ItemCertificate } from '../../components/item-certificate/item-certificate';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from "@angular/router";
import { Certificate } from '../../services/certificate';
import { ICertificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate, SecondaryButton, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates implements OnInit {
  certificates: ICertificate[] = []
  constructor(private certificate: Certificate) {}

  ngOnInit(): void {
    this.certificates = this.certificate.certificates
  }
}
