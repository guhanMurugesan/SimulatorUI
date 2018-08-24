import { Component, OnInit } from '@angular/core';
import { Asset } from '../../Modals/Asset';
import { AssetService } from '../../Services/asset.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assets:Asset[];
  displayedColumns: string[] = [ 'Gmuasset', 'GmuIp', 'Enable','Delete'];
  dataSource = this.assets;
  newAsset:Asset;

  constructor(private assetService:AssetService) { }

  ngOnInit() {
    this.getAssets(); 
    this.newAsset = {Gmuasset: 1, GmuIp: "0.0.0.0"};
  }

  getAssets()
  {
    this.assetService.getAssets().subscribe(x=>this.assets = x);
  }

  delete(asset:Asset)
  {
    this.assetService.remove(asset).subscribe();
  }

  add()
  {
    this.assetService.add(this.newAsset).subscribe();
  }
  
}
