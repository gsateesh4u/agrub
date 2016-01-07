//
//  DummyData.swift
//  AGRUB
//
//  Created by Admin Pavi on 1/5/16.
//  Copyright © 2016 agrub. All rights reserved.
//

import UIKit

class DummyData: NSObject {
    func categoriesDump() -> NSArray{
        var arrCategories = []
        let objItemCateg1 = ItemCategory()
        let objItemCateg2 = ItemCategory()
        let objItemCateg3 = ItemCategory()
        let objItemCateg4 = ItemCategory()
        let objItemCateg5 = ItemCategory()
        
        objItemCateg1.strCategoryname = "Category 1"
        objItemCateg2.strCategoryname = "Category 2"
        objItemCateg3.strCategoryname = "Category 3"
        objItemCateg4.strCategoryname = "Category 4"
        objItemCateg5.strCategoryname = "Category 5"
        
        arrCategories = [objItemCateg1, objItemCateg2, objItemCateg3, objItemCateg4, objItemCateg5]
        return arrCategories
    }
    
    func ordersDump() -> NSMutableArray{
        var arrOrders:NSMutableArray = []
        let objOrder1 = Order()
        let objOrder2 = Order()
        let objOrder3 = Order()
        let objOrder4 = Order()
        let objOrder5 = Order()
        
        objOrder1.iOrder_id = 1
        objOrder1.strOrder_name = "Order Title 1"
        objOrder1.strOrder_start_date = "Jan 25th, 2016"
        objOrder1.strOrder_end_date = "Feb 2nd, 2016"
        
        objOrder2.iOrder_id = 2
        objOrder2.strOrder_name = "Order Title 2"
        objOrder2.strOrder_start_date = "Feb 3rd, 2016"
        objOrder2.strOrder_end_date = "Feb 10th, 2016"
        
        objOrder3.iOrder_id = 3
        objOrder3.strOrder_name = "Order Title 3"
        objOrder3.strOrder_start_date = "Feb 11th, 2016"
        objOrder3.strOrder_end_date = "Feb 15th, 2016"
        
        objOrder4.iOrder_id = 4
        objOrder4.strOrder_name = "Order Title 4"
        objOrder4.strOrder_start_date = "Feb 17th, 2016"
        objOrder4.strOrder_end_date = "Feb 19th, 2016"
        
        objOrder5.iOrder_id = 5
        objOrder5.strOrder_name = "Order Title 5"
        objOrder5.strOrder_start_date = "Feb 20th, 2016"
        objOrder5.strOrder_end_date = "Feb 22th, 2016"
        
        arrOrders = [objOrder1, objOrder2, objOrder3, objOrder4, objOrder5,objOrder1, objOrder2, objOrder3, objOrder4, objOrder5]
        return arrOrders
    }
}
