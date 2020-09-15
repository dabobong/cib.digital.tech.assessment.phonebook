using cib.digital.tech.assessment.phonebook.Controllers.Service.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cib.digital.tech.assessment.phonebook.Controllers.Service.Services
{
    public interface IPhoneBookServices
    {
        Task<bool> Create(PhoneBook phoneBook);
        IOrderedQueryable<PhoneBook> GetAll();
    }
}
