import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit{
  @Output() onAdminChange = new EventEmitter()
  editAminStatus:boolean = false
  adminDetails:any = {}
  adminProfile:string = "https://www.pngmart.com/files/21/Admin-Profile-Transparent-PNG.png"

  constructor(private adminAPI:AdminAPIService){}
  ngOnInit(): void {
    this.adminAPI.getAdminDetails().subscribe((result:any)=>{
      this.adminDetails = result
      if(result.picture){
        this.adminProfile = result.picture
      }
    })
  }

  editAdminBtn(){
    this.editAminStatus = true
  }

  cancel(){
    this.editAminStatus = false
  }

  getFile(event:any){
    let uploadFile = event.target.files[0]
    // this.adminProfile = URL.createObjectURL(uploadFile)
    let fr = new FileReader()
    fr.readAsDataURL(uploadFile)
    fr.onload = (event:any)=>{
      this.adminProfile = event.target.result
      this.adminDetails.picture = this.adminProfile
    }
    console.log(this.adminDetails);
  }

  updateAdmin(){
    this.adminAPI.updateAdminDetails(this.adminDetails).subscribe({
      next:(result:any)=>{
        this.editAminStatus = false
        alert("Updated successfully!!!")
        sessionStorage.setItem("adminDetails",JSON.stringify(result))
        this.onAdminChange.emit(result.name)
      },
      error:(reason:any)=>{
        console.log(reason);
        alert("Updation failed... Please try after sometimes!!!")
      }
    })
  }

}
