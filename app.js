import javax.swing.*;
import javax.swing.table.*;
import java.awt.*;
 
class invoicesTable{
   public static void main(String args[]){
      int count = 0;
ClicksCount(){
      JFrame frame = new JFrame();
      System.out.println ("Invoices Table");
      String[] columnNames = {"Invoice No.", "Invoice Date", "Customer Name", "Total"};
 
  getContentPane ().add (left, BorderLayout.WEST);
  JButton button1 = new JButton("Create new invoice");
  JButton button2 = new JButton("Delete invoice");
  button1.addActionListener(this);
  button2.addActionListener(this);

   frame.add(table);
   frame.add(button1);
   frame.add(button2);
   frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
   frame.setSize(400,400);
   frame.setLocationRelativeTo(null);  
   frame.setVisible(true);
   }
  public void actionPerformed(ActionEvent e) {
       count++;
       System.out.println("You have clicked the ACTIVE button " + count + " times");
   }

  }
}
class invoiceItems{
public static void main(String args[]){
      int count = 0;
ClicksCount(){
      JFrame frame = new JFrame();
      System.out.println ("Invoice data");
      String[] columnNames = {"Invoice No.", "Invoice Date", "Customer Name", "Total", "Items total"};
 
  getContentPane ().add (right, BorderLayout.EAST);
  JButton button1 = new JButton("Save");
  JButton button2 = new JButton("Cancel");
  button1.addActionListener(this);
  button2.addActionListener(this);


 
   frame.add(table);
   frame.add(button1);
   frame.add(button2);
   frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
   frame.setSize(400,400);
   frame.setLocationRelativeTo(null);  
   frame.setVisible(true);
   }
  public void actionPerformed(ActionEvent e) {
       count++;
       System.out.println("You have clicked the ACTIVE button " + count + " times");
   }

  }
}

public static void main(String args[]){
 
       ClicksCount Clicks = new ClicksCount();
    }

