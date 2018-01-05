import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

import { TreeModule,TreeNode } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';

@Component({
  selector: 'org-mng',
  templateUrl: './org-mng.component.html',
  styleUrls: ['./org-mng.component.scss'],
  animations: [
    flyIn
  ]
})
export class OrgMngComponent implements OnInit {
	public orgTree: TreeNode[]=[
        {
            "label": "研发部",
            "data": "001",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                    "label": "移动事业部",
                    "data": "1-1",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {"label": "江苏", "icon": "fa-file-word-o", "data": "1-1-1"}, 
                        {"label": "浙江", "icon": "fa-file-word-o", "data": "1-1-2"}
                    ]
                },
                {
                    "label": "联通事业部",
                    "data": "1-2",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {"label": "江苏", "icon": "fa-file-word-o", "data": "1-2-1"},
                        {"label": "浙江", "icon": "fa-file-word-o", "data": "1-2-2"}
                    ]
                }]
        },
        {
            "label": "市场部",
            "data": "002",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },
        {
            "label": "行政部",
            "data": "003",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },
        {
            "label": "财务部",
            "data": "004",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        }
	];
    
    //当前选中的节点
    public selectedNode: TreeNode;
    public orgName: string;
    public orgCode: string;
    public disabled: boolean = true;
    public isNew:boolean=false;

	constructor() {

	}

	ngOnInit() {
		
    }

    public confirmDelete():void {
        // this.confirmationService.confirm({
        //     message: '确定要删除吗？',
        //     accept: () => {
        //         console.log("删除节点");
        //     }
        // });
    }
    
    public editOrSave(event):void {
        if(this.isNew){
            var newNode:any={
                label:this.orgName,
                data:this.orgCode,
                expandedIcon: "fa-folder-open",
                collapsedIcon: "fa-folder"
            };
            if(this.selectedNode){
                if(!this.selectedNode.children){
                    this.selectedNode.children=[];
                }
                this.selectedNode.children.push(newNode);
            }else{
                this.orgTree.push(newNode);
            }
            return;
        }
        if(!this.disabled){
            var node=this.findNodeRecursive(this.orgTree);
            if(node){
                node.label=this.orgName;
                node.data=this.orgCode;
            }
        }
        this.disabled = !this.disabled;
    }

    private findNodeRecursive(nodes:any):any{
        if(nodes instanceof Array&&nodes.length!=0){
            let result=null;
            for(let i=0;i<nodes.length;i++){
                let element=nodes[i];
                console.log(element);
                if(element.data==this.orgCode){
                    result=element;
                    break;
                }else if(element.children){
                    this.findNodeRecursive(element.children);
                }
            }
            return result;
        }
    }

    public nodeSelect(event):void{
        this.disabled=true;
        this.isNew=false;
        this.orgName=this.selectedNode.label;
        this.orgCode=this.selectedNode.data;
    }

    public prepareForNewOrg():void{
        this.disabled=false;
        this.isNew=true;
        this.orgName="";
        this.orgCode="";
    }
}
