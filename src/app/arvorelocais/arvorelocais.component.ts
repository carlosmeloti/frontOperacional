import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { NodeService } from 'src/service/nodeservice';


@Component({
  selector: 'app-arvorelocais',
  templateUrl: './arvorelocais.component.html',
  styleUrls: ['./arvorelocais.component.css']
})



export class ArvorelocaisComponent implements OnInit {

    files: TreeNode[];

    selectedFiles: TreeNode[];
    messageService: any;

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files = files);
    }



    nodeSelect(event) {
      this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
  }

    nodeUnselect(event) {
        this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }
}


