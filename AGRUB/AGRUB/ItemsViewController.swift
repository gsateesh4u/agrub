//
//  ItemsViewController.swift
//  AGRUB
//
//  Created by PAVITRA RUPANI on 05/01/16.
//  Copyright © 2016 agrub. All rights reserved.
//

import UIKit

class ItemsViewController: UIViewController,UITableViewDataSource,UITableViewDelegate {
   
    @IBOutlet weak var tblItemCateg: UITableView!
   
    var arrItemCateg = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let objDumpCateg = DummyData()
        arrItemCateg = objDumpCateg.categoriesDump()
        tblItemCateg.reloadData()
    }
    @IBAction func back(sender: AnyObject) {
        [self .dismissViewControllerAnimated(true, completion: nil)]
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int{
        return arrItemCateg.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell{
        let cell = tableView.dequeueReusableCellWithIdentifier("ItemCell", forIndexPath: indexPath) as! ItemCell
        if (tableView == tblItemCateg){
            let objItemCateg = arrItemCateg.objectAtIndex(indexPath.row) as! ItemCategory
            cell.backgroundColor=nil
            cell.selectionStyle = UITableViewCellSelectionStyle.None
            cell.lblItemCategName.text = objItemCateg.strCategoryname
            NSTimer.scheduledTimerWithTimeInterval(0.01, target: cell, selector: "viewWillLayoutSubviews", userInfo: nil, repeats: false)
        }
        return cell
    }

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
