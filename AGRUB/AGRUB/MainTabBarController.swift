//
//  MainTabBarController.swift
//  AGRUB
//
//  Created by PAVITRA RUPANI on 26/12/15.
//  Copyright © 2015 agrub. All rights reserved.
//

import UIKit

class MainTabBarController: UITabBarController {

    override func viewDidLoad() {
        super.viewDidLoad()
        //self.setCustomTabBar()
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // MARK: - TabBar Methods
    //Set TabBar Custom
    override func viewWillLayoutSubviews() {
        //var tabFrame = self.tabBar.frame
        //tabFrame.size.height = self.view.frame.size.height*0.15
        //tabFrame.origin.y = self.view.frame.size.height - (self.view.frame.size.height*0.15)
        //self.tabBar.frame = tabFrame
        
        self.tabBar.tintColor = UIColor.init(red: 45.0/255.0, green: 45.0/255.0, blue: 45.0/255.0, alpha: 1.0)
        self.tabBar.barTintColor = UIColor.init(red: 240.0/255.0, green: 240.0/255.0, blue: 240.0/255.0, alpha: 1.0)        
        //UITabBarItem.appearance().setTitleTextAttributes([NSFontAttributeName: UIFont(name:"Roboto-Regular", size:20)!,NSForegroundColorAttributeName: UIColor.init(red: 240.0/255.0, green: 240.0/255.0, blue: 240.0/255.0, alpha: 1.0)],forState: .Normal)
    }
    
    func setCustomTabBar(){
        //let tabBar = self.tabBar as UITabBar
        //let tabBarItem1 = tabBar.items![0] as UITabBarItem
        //let tabBarItem2 = tabBar.items![1] as UITabBarItem
        //let tabBarItem3 = tabBar.items![2] as UITabBarItem
        //let tabBarItem4 = tabBar.items![3] as UITabBarItem
        //tabBarItem1.image = UIImage(named: "Order")
        //tabBarItem1.selectedImage = UIImage(named: "SelOrder")
        //tabBarItem2.image = UIImage(named: "DC")
        //tabBarItem2.selectedImage = UIImage(named: "SelDC")
        //tabBarItem3.image = UIImage(named: "Invoice")
        //tabBarItem3.selectedImage = UIImage(named: "SelInvoice")
        //tabBarItem4.image = UIImage(named: "Account")
        //tabBarItem4.selectedImage = UIImage(named: "SelAccount")
       
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
