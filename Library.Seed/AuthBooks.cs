using Library.DAL;
using OfficeOpenXml;

namespace Library.Seed
{
    public static class AuthorBooks
    {
        public static void Collect(ExcelWorksheet rawData, UnitOfWork unit)
        {
            for (int row = 2; row <= rawData.Dimension.Rows; row++)
            {
                unit.AuthBooks.Insert(new AuthBooks
                {
                    Author = unit.Authors.Get(Utility.authDictionary[rawData.ReadInteger(row, 2)]),
                    Book = unit.Books.Get(Utility.bookDictionary[rawData.ReadInteger(row, 1)])
                });
            }
            unit.Save();
        }
    }
}
