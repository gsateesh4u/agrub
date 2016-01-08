//
//  IndentViewController.swift
//  AGRUB
//
//  Created by PAVITRA RUPANI on 29/12/15.
//  Copyright © 2015 agrub. All rights reserved.
//

import UIKit

class IndentViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

    @IBOutlet weak var tblOrder: UITableView!
    @IBOutlet weak var lblOrders: UILabel!
    @IBOutlet weak var lblHeader: UILabel!
    @IBOutlet weak var tblItems: UITableView!

    var arrOrders:NSMutableArray = []
    var iSelIndex = -1
    override func viewDidLoad() {
        super.viewDidLoad()
        let objDumpData = DummyData()
        arrOrders = objDumpData.ordersDump()
        tblOrder.reloadData()
        lblHeader.font = UIFont(name: "Roboto-Regular", size: 20)
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    // MARK: - Table View Data source
    func numberOfSectionsInTableView(tableView: UITableView) -> Int{
        return 1
    }
    func tableView(tableView: UITableView, titleForHeaderInSection section: Int) -> String?{
        if(tableView == tblOrder){
            return "ORDERS"
        }
        return ""
    }
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int{
        if (tableView == tblOrder){
            return arrOrders.count
        }
        else{
           return 2
        }
    }

    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell{
        if (tableView == tblOrder){
            let cell = tableView.dequeueReusableCellWithIdentifier("IndentCell", forIndexPath: indexPath) as! IndentCell
            cell.backgroundColor=nil
            cell.selectionStyle = UITableViewCellSelectionStyle.None
            
            let objOrder = arrOrders.objectAtIndex(indexPath.row) as! Order
            cell.lblTitle.text = objOrder.strOrder_name
            cell.lblStatus.text = "Submitted"
            cell.lblDate.text = "\(objOrder.strOrder_start_date)" + " - " + "\(objOrder.strOrder_end_date)"
            
            return cell
        }
        else{
            let cell = tableView.dequeueReusableCellWithIdentifier("CartCell", forIndexPath: indexPath) as! CartCell
            cell.backgroundColor=nil
            cell.selectionStyle = UITableViewCellSelectionStyle.None
            return cell
        }
    }
    // MARK: - Table View Delegate
    
    func tableView(tableView: UITableView, willDisplayHeaderView view: UIView,
        forSection section: Int) {
            if(tableView == tblOrder){
                let header = view as! UITableViewHeaderFooterView
                header.textLabel!.font = UIFont(name: "Roboto-Regular", size: 16)
                
                let button   = UIButton(type: UIButtonType.System) as UIButton
                button.frame = CGRectMake(header.frame.size.width-40, 0, 40, header.frame.size.height)
                button.backgroundColor = UIColor.clearColor()
                button.setTitle("+", forState: UIControlState.Normal)
                button.titleLabel?.font = UIFont(name: "Roboto-Light", size: 21)
                button.addTarget(self, action: "createOrder:", forControlEvents: UIControlEvents.TouchUpInside)
                header.addSubview(button)
            }
    }
    
    func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat{
        if(tableView == tblOrder){
            if (iSelIndex == indexPath.row){
                return 445
            }
            return 90
        }
        return 180
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath){
        if (tableView == tblOrder){
            if (indexPath.row == iSelIndex){
                iSelIndex = -1
            }
            else{
                iSelIndex = indexPath.row
            }
            tableView.beginUpdates()
            tableView.endUpdates()
            tableView.reloadData()
        }
        
    }
    
     func tableView(tableView: UITableView, commitEditingStyle editingStyle: UITableViewCellEditingStyle, forRowAtIndexPath indexPath: NSIndexPath) {
        if editingStyle == UITableViewCellEditingStyle.Delete {
            arrOrders.removeObjectAtIndex(indexPath.row)
            tableView.deleteRowsAtIndexPaths([indexPath], withRowAnimation: UITableViewRowAnimation.Automatic)
        }
    }
    
    // MARK: - Custom Methods
    func createOrder(sender: AnyObject){
        let cartCntrlr = self.storyboard!.instantiateViewControllerWithIdentifier("cartScene") as! CartViewController
        self.presentViewController(cartCntrlr, animated: true, completion: nil)
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
