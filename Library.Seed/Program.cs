using Library.DAL;
using OfficeOpenXml;
using System;
using System.IO;

namespace Library.Seed
{
    class Program
    {
        static void Main()
        {
            FileInfo file = new FileInfo(@"C:\Library\Library.xlsx");
            using (ExcelPackage package = new ExcelPackage(file))
            {
                using (UnitOfWork unit = new UnitOfWork())
                {

                    unit.Context.Database.EnsureDeleted();
                    unit.Context.Database.EnsureCreated();

                    Publishers.Collect(package.Workbook.Worksheets["Publishers"], unit);
                    Books.Collect(package.Workbook.Worksheets["Books"], unit);
                    Authors.Collect(package.Workbook.Worksheets["Authors"], unit);
                    AuthorBooks.Collect(package.Workbook.Worksheets["AuthBooks"], unit);

                }
            }
            Console.WriteLine("All tasks done.");
            Console.ReadKey();
        }
    }
}
